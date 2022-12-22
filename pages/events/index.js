import Image from 'next/image';
import React from 'react'
import AllEvents from '../../src/components/events/events-page';

const EventsPage = (props) => {

    const { data } = props;
    return <AllEvents data={data} />
}

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');
    return {
        props: {
            data: events_categories
        }
    }
}