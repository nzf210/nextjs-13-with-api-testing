import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) =>
(
    <div className="home_body">
        {data.map((evn) =>
            // eslint-disable-next-line react/jsx-key
            <Link className="card" key={evn.id} href={`/events/${evn.id}`} passHref={true} legacyBehavior>
                <a >
                    <Image src={evn.image} alt={evn.title} height={'300'} width={200} />
                    <h2>{evn.title}</h2>
                    <p>{evn.description}</p>
                </a>
            </Link>
        )}
    </div>
)
