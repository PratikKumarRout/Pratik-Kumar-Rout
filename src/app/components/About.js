import PlaceholderBox from "./PlaceholderBox";

export default function About() {
    return (
        <section>
            <PlaceholderBox width={200} height={30} />
            <PlaceholderBox width="100%" height="15px" shade="#333" />
            <PlaceholderBox width="80%" height="15px" shade="#bbb" />
            <PlaceholderBox width="60%" height="15px" shade="#ccc" />
        </section>
    );
}