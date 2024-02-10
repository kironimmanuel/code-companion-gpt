import { getOrCreateUserTokensByUserId } from '@/src/services/token-actions';
import { UserButton, auth, currentUser } from '@clerk/nextjs';

export const MemberProfile = async () => {
    const user = await currentUser();
    const { userId } = auth();

    userId && (await getOrCreateUserTokensByUserId(userId));

    return (
        <div className='px-4 flex items-center gap-2'>
            <UserButton afterSignOutUrl='/' />
            <p className='hidden lg:block'>{user?.firstName}</p>
        </div>
    );
};
