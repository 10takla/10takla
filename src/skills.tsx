import { CSSProperties } from "react";

type Skill = string | [string, string]

const skills: Record<string, Skill[]> = {
    Rust: [
        ["Axum", "https://docs.rs/axum/latest/axum/"],
        ["Actix", "https://docs.rs/actix/latest/actix/"],
        ["Tokio", "https://docs.rs/tokio/latest/tokio/"],
        ["Diesel", "https://docs.rs/diesel/latest/diesel/"],
        "Wasm",
        ["Rustc", "https://github.com/rust-lang/rust"],
        "CLI",
        "Asynchrony",
        "Concurrency&Parallelism"
    ],
    "Языки программирования": [
        "Rust",
        "Python",
        "TypeScript",
        "HTML",
        "CSS"
    ],
    Backend: [
        "MySQL",
        "Django",
        "Axum",
        "Actix",
        "REST API"
    ],
    Frontend: [
        "React",
        "Redux Toolkit",
        "RTK Query"
    ],
    Прочее: [
        "Linux",
        "Git",
        ["GitHub", "https://github.com/10takla"]
    ]
};
const stl: Record<string, CSSProperties> = {
    blocks: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        gap: 20,
        maxHeight: 500,
    },
    block: {
        maxWidth: 300,
        background: "rgba(107, 178, 246, 0.12)",
        borderRadius: 10,
        boxSizing: "border-box",
        padding: 15
    },
    nameBlock: {

    },
    skills: {
        display: "flex",
        flexWrap: "wrap",
        rowGap: 4,
        columnGap: 10
    },
    skill: {
        maxWidth: 120,
        boxSizing: "border-box"
    },
    button: {
        paddingBlock: 3,
        paddingInline: 8,
        background: "#f4f6fb",
        borderColor: "#aabbca",
    },
    activeButton: {
        paddingBlock: 3,
        paddingInline: 8,
        background: "#f4f6fb",
        borderWidth: 3,
        borderColor: "#034077",
    }
}

const Skill = ({ skill }: { skill: Skill }) => {
    if (typeof skill == 'string') {
        return (
            <button style={stl.button}>
                {skill}
            </button>
        )
    } else {
        return (
            <button style={{ ...stl.button, ...stl.activeButton }}>
                <a href={skill[1]}>
                    {skill[0]}
                </a>
            </button>
        )
    }
}

const Skills = ({ skills }: { skills: Skill[] }) => {
    return (
        <div style={stl.skills}>{
            skills.map((skill) => (
                <div style={stl.skill}>
                    <Skill {...{ skill }} />
                </div>
            ))}
        </div>
    )
};

export default () => {
    return (
        <div style={stl.blocks}>
            {Object.entries(skills).map(([block, skills]) => (
                <div key={block} style={stl.block}>
                    <h3 style={stl.nameBlock}>{block}</h3>
                    <Skills {...{ skills }} />
                </div>
            ))}
        </div>
    )
};
