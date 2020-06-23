import Link from 'next/link';
import { useEffect, useState } from 'react';
import VehiclePerson from '../../api/VehiclePerson';

export interface ListProps {
    ownersList: VehiclePerson[] | undefined;
}

export default function List({ ownersList }: ListProps) {
    // const [owners, setOwners] = useState([]);
    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch('http://localhost:4001/vehicles');
    //         const ownersList = await response.json();
    //         setOwners(ownersList);
    //     }
    //     loadData();
    // }, []);

    return <div>
        {ownersList?.map((e, index) => (

            <div>
                <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
                    <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
                </Link>
            </div>
        ))}
    </div>
}

List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    const ownersList: VehiclePerson[] | undefined = await response.json();
    return { ownersList: ownersList }
}