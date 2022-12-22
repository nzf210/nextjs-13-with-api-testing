import Image from 'next/image';
import Link from 'next/link';

import AnyEvent from '../../../src/components/events/anyEvents';

const eventPerCityPage = ({ data, pageName }) => <AnyEvent data={data} pageName={pageName} />;

export default eventPerCityPage;

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPath = events_categories.map(evn => {

        return {
            params: {
                any: evn.id.toString()
            }
        }
    })

    return {
        paths: allPath,
        fallback: false
    }
}

export async function getStaticProps(context) {
    console.log('ceontex any', context);
    const id = context?.params.any;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter((ev) => ev.city === id);

    console.log('data contex', data);
    return { props: { data: data, pageName: id } };
}