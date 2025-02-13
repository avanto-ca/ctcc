import React, { useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Member } from './types';
import MemberCard from './MemberCard';

interface MemberSearchProps {
    searchQuery: string;
    members: Member[];
}

const MemberSearch: React.FC<MemberSearchProps> = ({ searchQuery, members }) => {
    const options = {
        keys: ['Firstname', 'Lastname', 'phone', 'type', {
            name: 'fullName',
            getFn: (member: Member) => `${member.Firstname} ${member.Lastname}`,
        }],
        threshold: 0.3, // Adjust the threshold as needed
    };

    const fuse = new Fuse(members, options);
    const filteredMembers = searchQuery ? fuse.search(searchQuery).map(result => result.item) : [];

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchQuery && listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchQuery]);

    return (
        <div>
            {searchQuery && (
                <>
                    <h2 style={{ color: '#5a3d99', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 20px 0', textAlign: 'center' }}>
                        Search Results:
                    </h2>
                    <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-6">
                        {filteredMembers.map((member, index) => (
                            <MemberCard
                                key={index}
                                firstName={member.Firstname}
                                lastName={member.Lastname}
                                logo={member.logo}
                                address={member.address}
                                type={member.type}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MemberSearch;
