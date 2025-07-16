import Jobs from '../Components/FindJobs/Jobs';
import SearchBar from '../Components/FindJobs/SearchBar';
import { Divider } from '@mantine/core';

const FindJobs = () => {
    return (
        <div className="min-h-[100vh] bg-blueblack1 font-sans overflow-x-hidden px-0 md:px-8 py-8">
            <Divider size="xs" mx="md" />
            <SearchBar />
            <Divider size="xs" mx="md" />
            <Jobs />
        </div>
    );
}
export default FindJobs;