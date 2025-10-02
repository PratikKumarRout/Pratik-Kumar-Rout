import styles from "./Certificates.module.css";
import PlaceholderBox from "./PlaceholderBox";
import Image from "next/image";

const certificates = [
    { label: "Data Science with Python", url: "/certificates/python.png" },
    { label: "Cloud Computing", url: "/certificates/cloud.png" },
    { label: "Fundamental of AI", url: "/certificates/ai.png" },
    { label: "Introduction to IOT", url: "/certificates/iot.png" },
];


export default function Certificates() {
    return (
        <section id="certificates">
            <h2>Certificates</h2>
            <div className={styles.certificatesContainer}>
                <div className={styles.certificateScroll}>
                    {[...certificates, ...certificates].map((certificate, index) => (
                        <div key={index} className={styles.certificateChip}>
                            <Image
                                src={certificate.url}
                                alt={certificate.label}
                                height={300}
                                width={400}
                                style={{ objectFit: "cover" }}
                            />
                            <p style={{
                                color: "var(--accent)",
                                fontWeight: "bold"
                            }}>{certificate.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}   