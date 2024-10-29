import {Members} from '@/components/Members'
import {Navbar} from '@/components/navbar'
export default function MembersPage() {
    return (
        <>
            <div className='flex flex-col h-screen flex-grow bg-[#fcfcfc]'>
            <Navbar />
            <Members />
            </div>
        </>
    );
}