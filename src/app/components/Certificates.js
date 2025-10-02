import styles from "./Certificates.module.css";
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
            <div className={styles.certificate_heading}>
                <h2>Certificates</h2></div>
            <div className={styles.certificates_container}>
                <div className={styles.certificate_scroll}>
                    {[...certificates, ...certificates].map((certificate, index) => (
                        <div key={index} className={styles.certificate_chip}>
                            <Image
                                src={certificate.url}
                                alt={certificate.label}
                                height={300}
                                width={400}
                                className={styles.certificate_image} />
                            <p>{certificate.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}   