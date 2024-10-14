import { Brain, Clock, Info, MessageCircle, Target, Users } from 'lucide-react';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
} from './ui';

export const InstructionsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="w-full sm:w-auto">
          <Info className="mr-2 h-4 w-4" /> Instructions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            How to Play TugMind
          </DialogTitle>
          <DialogDescription>
            Learn the rules and tips to win the game!
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="space-y-4 text-muted-foreground">
            <p className="font-medium text-foreground">
              Welcome to TugMind! This is a fast-paced, team-based game where
              you pull the rope to your side by solving mental challenges faster
              than your opponents!
            </p>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Basic Rules:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Users className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    You will be part of a team. There are two teams: Team A and
                    Team B.
                  </span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    Each round, a challenge is presented to both teams
                    simultaneously. It could be a math problem, a typing race,
                    or a quick puzzle.
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    Be the first to solve the challenge correctly to score a
                    point for your team. Each correct answer pulls the rope
                    towards your side.
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    The game ends when one team reaches the target score,
                    pulling the rope entirely to their side. There are no ties!
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Tips for Success:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <MessageCircle className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    Work as a team and communicate! Speed and accuracy are key
                    to winning.
                  </span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                  <span>
                    Stay focused and try not to make mistakes—each wrong answer
                    gives your opponents an opportunity to score!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="w-full mt-4">Got It!</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
