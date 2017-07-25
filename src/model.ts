type ID = string;

type UserID = ID;
export interface User {
  id?: UserID;
  name: string;
}

type TeamID = ID;
export interface Team {
  id?: TeamID;
  name: string;
  members: UserID[];
}

type ParticipantID = ID;
export interface Participant {
  id?: ParticipantID;
  userID?: UserID;
  teamID?: TeamID;
}

type MatchID = ID;
export interface Match {
  id?: MatchID;
  participants: ParticipantID[];
  winner?: ParticipantID;
}
