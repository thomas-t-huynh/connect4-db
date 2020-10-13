import { Match, User } from '../index';
import { ApolloError } from 'apollo-server';

export const MatchResolvers = {
    Query: { 
        getUserMatches: async (_: any, args: { userId: number }) => {
            const { userId } = args;
            console.log(userId)
            try {
                const matches = await Match
                    .createQueryBuilder("match")
                    .leftJoin("match.users", "user")
                    .where("user.id = :userId", { userId })
                    .getMany()
                return matches;
            } catch(error) {
                throw new ApolloError(error);
            }
        }
    },
    Mutation: {
        createMatch: async (_: any, args: { 
            player1Id: number,
            player2Id: number
        }) => {
            const { player1Id, player2Id } = args;
            try {
                const player1 = await User.findOneOrFail({ where: {id: player1Id } })
                const player2 = await User.findOneOrFail({ where: {id: player2Id } })
                const match = Match.create({
                    player1: player1.username,
                    player2: player2.username,
                    winner: '',
                    users: [ player1, player2 ]
                })
                await match.save();
                return match;
            } catch(error) {
                throw new ApolloError(error);
            }
        },
        setMatchWinner: async (_: any, args: { matchId: number, winner: string }) => {
            const { matchId, winner } = args;
            try {
                const match = await Match.findOneOrFail({ where: { id: matchId }})
                match.winner = winner;
                await match.save();
                return match;
            } catch(error) {
                throw new ApolloError(error);
            }
        }
    }
}