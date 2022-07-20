import { useEffect, useState } from "react";

export default function Home() {
    const typedTextArray = [
        { word: "テスト", typedText: "test" },
        { word: "テスト1", typedText: "test1" },
        { word: "テスト2", typedText: "test2" },
        { word: "テスト3", typedText: "test3" },
        { word: "テスト4", typedText: "test4" },
    ];
    const [typedText, setTypedText] = useState([]);
    const [typedTextDict, setTypedTextDict] = useState({});

    useEffect(() => {
        const getTypedText = async () => {
            const splitText = async () => {
                await typedTextDict["typedText"].split("");
            };
            const inputTypedText =
                typedTextArray[
                    Math.floor(Math.random() * typedTextArray.length)
                ];
            console.log(inputTypedText);
            setTypedTextDict(inputTypedText);
            splitText();
        };

        getTypedText();
    }, []);

    return (
        <div>
            <div> {typedText}</div>
            <div> {typedTextDict["typedText"]}</div>
        </div>
    );
}
