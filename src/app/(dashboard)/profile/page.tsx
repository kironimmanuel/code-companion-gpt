import { Badge } from '@/src/components';
import { getUserTokensByUserId } from '@/src/services/token-actions';
import { UserProfile, auth } from '@clerk/nextjs';

export default async function ProfilePage() {
    const { userId } = auth();

    const tokens = userId && (await getUserTokensByUserId(userId));

    return (
        <div>
            <div className='mb-8'>
                <Badge variant='secondary' className='ml-8 text-lg p-2 px-5'>
                    Current token amount: <strong>{tokens ?? 0}</strong>
                </Badge>
            </div>
            <UserProfile />
        </div>
    );
}
