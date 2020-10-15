import { DataSource } from 'apollo-datasource';
import { Match, User } from '../index';
import { ApolloError } from 'apollo-server';
import { ProducedContext } from '@/context';

export class MatchService extends DataSource<ProducedContext> {
    
    async getUserMatches(args: { userId: number }) {
        const { userId } = args;
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


    async createMatch(args: { 
        player1Id: number,
        player2Id: number
    }) {
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
    }
    async setMatchWinner(args: { matchId: number, winner: string }) {
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