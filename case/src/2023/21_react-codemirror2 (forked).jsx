// import React, { useMemo, useRef, useState } from "react";
// import { UnControlled as CodeMirror } from "react-codemirror2";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/sql/sql";
// import "codemirror/mode/shell/shell";
// import "codemirror/addon/display/placeholder";
// import "codemirror/addon/hint/show-hint.css"; // 用来做代码提示
// import "codemirror/addon/hint/show-hint.js"; // 用来做代码提示
// import "codemirror/addon/hint/sql-hint.js"; // 用来做代码提示
// import "codemirror/theme/solarized.css";
// import { format } from "sql-formatter"; // 格式化sql
// import p from "sqlite-parser";
// // const mockdata =
// //   "select * from word;CRLFselect * from word;CRLFselect * from word;CRLFselect * from word;select * from word;select * from word;select * from word;select * from word;CRLFselect * from word;CRLFselect * from word;";
// const mockdata = `select * from word;
// select * from table;`;

// const SqlConsole = React.memo(() => {
//     console.log(p(mockdata), "ast");

//     const formatData = format(mockdata, {
//         language: "spark", // Defaults to "sql" (see the above list of supported dialects)
//         indent: "    ", // Defaults to two spaces
//         uppercase: true, // Defaults to false
//         linesBetweenQueries: 2 // Defaults to 1
//     });
//     const editCodeMirrorRef = useRef();
//     const [curValue, setCurValue] = useState(formatData);

//     const options = useMemo(() => {
//         return {
//             mode: "text/x-mysql",
//             lineNumbers: true,
//             styleActiveLine: true,
//             cursorHeight: 1,
//             autofocus: true,
//             extraKeys: {},
//             fullScreen: true
//             // theme: "solarized light",
//             // lineSeparator: "NL" // 指定换行符
//         };
//     }, []);

//     const handleInputRead = (editor, changeObj) => {
//         // 以a-z开头 才会自动显示提示语句
//         if (/^[a-zA-Z]/.test(changeObj.text[0])) {
//             //库和表名显示，一般是库名中包含一个表名数组，但是要在第一级显示，也需要把表名加进去
//             var data = {
//                 test: ["t_user", "menu", "auth_info"],
//                 t_user: [],
//                 menu: [""],
//                 default: ["tableinfo"]
//             };
//             editor.setOption("hintOptions", {
//                 tables: data,
//                 completeSingle: false
//             });
//             editor.execCommand("autocomplete");
//         }
//     };

//     const handleEditorChange = (editor, data, value) => {
//         setCurValue(value);
//     };

//     const getSqlValue = () => {
//         console.log(curValue, "获取到的value");
//         // const test = lexer.tokenize('select * from my_table where foo = "bar" ');
//         // console.log(lexer, "kkkk");
//     };

//     return (
//         <>
//             <CodeMirror
//                 ref={editCodeMirrorRef}
//                 value={curValue}
//                 options={options}
//                 onInputRead={handleInputRead}
//                 onChange={handleEditorChange}
//             />
//             <button onClick={getSqlValue}>获取sql</button>
//         </>
//     );
// });

// export default SqlConsole;
