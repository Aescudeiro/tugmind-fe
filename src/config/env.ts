import * as z from 'zod';

const createEnv = () => {
  const envSchema = z.object({
    API_URL: z.string(),
  });

  const envVars = Object.entries(import.meta.env).reduce<
    Record<string, string>
  >((acc, [key, value]) => {
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value;
    }

    return acc;
  }, {});

  const parsedEnv = envSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided. The following variables are missing or invalid: ${Object.entries(
        parsedEnv.error.flatten().fieldErrors,
      )
        .map(([k, v]) => `- ${k}: ${v}`)
        .join('\n')}`,
    );
  }

  return parsedEnv.data;
};

export const env = createEnv();
