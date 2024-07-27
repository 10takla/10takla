import { CSSProperties } from "react";
type Book = [string, string, string] | [string, string]
const books: Array<Book> = [
    ["The Rust Programming Language",
        "https://doc.rust-lang.org/book/"
    ],
    ["The Rust Reference",
        "https://doc.rust-lang.org/reference/"
    ],
    ["Rust Atomics and Locks. Low-Level Concurrency in Practice",
        "https://marabos.nl/atomics/",
        "https://marabos.nl/atomics/cover.jpg"
    ],
    ["Asynchronous Programming in Rust",
        "https://rust-lang.github.io/async-book/"
    ],
    ["The Cargo Book",
        "https://doc.rust-lang.org/cargo/",
    ],
    ["The Little Book of Rust Macros",
        "https://veykril.github.io/tlborm/"
    ],
    ["Rust 🦀 and WebAssembly 🕸",
        "https://rustwasm.github.io/book/"
    ],
    ["Rust By Example",
        "https://doc.rust-lang.org/rust-by-example/"
    ],
    ["The rustdoc book",
        "https://doc.rust-lang.org/rustdoc/what-is-rustdoc.html"
    ],
];
const stl: Record<string, CSSProperties> = {
    blocks: {
        display: "flex",
        flexWrap: "wrap",
        gap: 20,
        fontSize: "0.5em",
    },
    block: {
        background: "rgba(107, 178, 246, 0.12)",
        boxSizing: "border-box",
    },
    book: {
        border: "1px solid #000",
        backgroundColor: "#f7f7f7",
        boxShadow: "5px 5px 15px rgba(0,0,0,0.5)",
        height: "20em"
    },
    typeBook: {
        width: "15em",
        display: "flex",
        fontFamily: "'Times New Roman', serif",
        color: "#333",
        background: "hsl(60, 9%, 87%)",
        boxSizing: "border-box",
    },
    line: {
        background: "#3b2e2a",
        minWidth: "2em",
        height: "100%"
    },
    bookName: {
        paddingInline: "0.2em",
        marginTop: "2em",
        display: "flex",
        justifyContent: "end",
        fontSize: "2em",
        textAlign: "center",
    }
    
}

const Book = ({ book }: { book: Book }) => {
    if (book.length == 2) {
        return (
            <a href={book[1]} style={stl.block}>
                <div style={{...stl.book, ...stl.typeBook}}>
                    <div style={stl.line}></div>
                    <h4 style={stl.bookName}>{book[0]}</h4>
                </div>
            </a>
        )
    } else {
        return (
            <a href={book[1]} style={stl.block}>
                <img src={book[2]} style={stl.book} alt={book[0]} />
            </a>
        )
    }

};

export default () => {
    return (
        <div style={stl.blocks}>
            {books.map((book, i) => (
                <Book key={book[1]} {...{ book }} />
            ))}
        </div>
    )
};
