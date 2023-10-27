// import React, { useMemo, useRef, useState } from "react";
// import "./styles.css";
// import { Controlled as CodeMirror } from "react-codemirror2";
// import "codemirror/lib/codemirror.css"; // 引入主样式
// import "codemirror/mode/sql/sql";
// import "codemirror/mode/shell/shell";
// import "codemirror/addon/display/placeholder";
// import "codemirror/addon/hint/show-hint.css"; // 用来做代码提示
// import "codemirror/addon/hint/show-hint.js"; // 用来做代码提示
// import "codemirror/addon/hint/sql-hint.js"; // 用来做代码提示
// import "codemirror/theme/solarized.css"; // 设置编辑器主题
// import { format } from "sql-formatter"; // 格式化sql
// // import sqliteParser from "sqlite-parser"; // 校验sql语法
// import { GenericSQL } from "dt-sql-parser";
// // styleSelectedText
// import "codemirror/addon/selection/mark-selection.js";
// import "codemirror/addon/search/match-highlighter.js";
// //代码高亮

// import "codemirror/addon/selection/active-line";
// {
//     /* 
//         常用事件：
//         onChange: codeMirror文本被修改后触发 
//         onBeforeChange: 在应用修改前触发，可用来调整修改内容或取消修改
//         onInputRead: 读取到输入时触发
//         onCursorActivity: 当鼠标点击内容区、选中内容、修改内容时被触发
//         onUpdate(instance):编辑器内容被改变时触发
//         onFocus(instance):编辑器获得焦点式触发
//         onBlur(instance):编辑器失去焦点时触发
//         常用方法：
//         getEditor()：获取CodeMirror对像
//         getValue():获取编辑器文本内容
//         getRange({line,ch},{line,ch}):获取指定范围内的文本内容第一个对象是起始坐标，第二个是结束坐标
//         setValue(text):设置编辑器文本内容
//         replaceRange(replaceStr,{line,ch},{line,ch}):替换指定区域的内容
//         replaceSelection(str):替换选中区域的代码
//         somethingSelected()：判断是否被选择
//         getLine(line)：获取指定行的文本内容
//         lineCount():统计编辑器内容行数
//         */
// }
// const mockdata =
//     "select ename,deptno,sal from emp where deptno=(select deptno from dept where loc='NEW YORK');SELECT ename,job,sal FROM EMP WHERE deptno in(SELECT deptno FROM dept WHERE dname LIKE 'A%');UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;";

// const SqlConsole = React.memo(() => {
//     // 编辑回填时格式化
//     const formatData = format(mockdata, {
//         language: "spark", // Defaults to "sql" (see the above list of supported dialects)
//         indent: "    ", // Defaults to two spaces
//         uppercase: true, // Defaults to false
//         linesBetweenQueries: 2 // Defaults to 1
//     });
//     const editCodeMirrorRef = useRef();
//     const [curValue, setCurValue] = useState(formatData);
//     const [errorLine, setErrorLine] = useState(0);
//     // const editor = editCodeMirrorRef.current.mirror;

//     const handleErrorLine = (num) => {
//         if (num === errorLine) {
//             return "*";
//         }
//         return num;
//     };

//     const options = useMemo(() => {
//         return {
//             mode: "text/x-mysql",
//             lineNumbers: true, // 是否显示行数
//             // firstLineNumber: 0, // 行号起始计数
//             gutters: ["CodeMirror-lint-markers"],
//             styleActiveLine: true,
//             autofocus: true, // 自动聚焦
//             smartIndent: true, //自动缩进
//             matchBrackets: true, // 光标匹配括号
//             styleSelectedText: true,
//             lineNumberFormatter: handleErrorLine
//             // fullScreen: true/
//             // theme: "solarized light",
//         };
//     }, [errorLine]);

//     const handleInputRead = (editor, changeObj) => {
//         // 以a-z开头 才会自动显示提示语句
//         if (/^[a-zA-Z]/.test(changeObj.text[0])) {
//             //库和表名显示，一般是库名中包含一个表名数组，但是要在第一级显示，也需要把表名加进去
//             var data = { table1: [""], table2: [""], table3: [""] };
//             editor.setOption("hintOptions", {
//                 tables: data,
//                 completeSingle: false
//             });
//             editor.execCommand("autocomplete");
//         }
//     };

//     // const handleInputRead = (editor, change) => {
//     //   const { text } = change;
//     //   const dechars = ["."];
//     //   console.log(text, "klklklkl");
//     //   const autocomplete = dechars.includes(text[0]);
//     //   if (autocomplete) {
//     //     // const data = getTableList(); // 获取库表列表
//     //     const data = ["ku1", "ku_2", "ku_3"];
//     //     editor.setOption("hintOptions", {
//     //       tables: data,
//     //       completeSingle: false
//     //     });
//     //     editor.execCommand("autocomplete");
//     //   } else {
//     //     console.log("testinput");
//     //     // const tableName = getTableList(); // 获取表列表
//     //     const tableName = ["table1", "table2", "table3"];
//     //     editor.setOption("hintOptions", {
//     //       tables: tableName,
//     //       completeSingle: false
//     //     });
//     //   }
//     //   editor.execCommand("autocomplete");
//     // };

//     const handleEditorChange = (editor, data, value) => {
//         setCurValue(value);
//     };

//     // 校验sql语法
//     // const validSql = () => {
//     //   sqliteParser(curValue, function (err, ast) {
//     //     if (err) {
//     //       // console.error("语法有错误，请检查");
//     //       console.log(err, "klklklkl", ast);
//     //       return;
//     //     }
//     //     const notSqlSelect = ast?.statement.find((x) => x.variant !== "select");
//     //     if (notSqlSelect) {
//     //       console.log(ast, "只能输入sql的select查询语句", notSqlSelect);
//     //       return;
//     //     }
//     //     console.log("其他操作");
//     //   });
//     // };

//     const dtValidate = () => {
//         const parser = new GenericSQL();
//         const errors = parser.validate(curValue);
//         const tokens = parser.getAllTokens(curValue);
//         // console.log(tokens[0].text, "klklkl");
//         // const notSqlSelect = tokens?.find((x) => x.text !== "select");
//         const notSqlSelect = tokens?.map((x) => {
//             if (x.text !== "SELECT") {
//                 console.log(x.line, "898989");
//                 return x.line;
//             }
//             return false;
//         });
//         console.log(notSqlSelect, "notSeleltx");

//         if (errors.length > 0) {
//             const test = errors.map((item) => item.startLine)[0];
//             console.log(errors, "errors");
//             setErrorLine(test);
//         }
//         console.log(errors, "klklk");
//     };
//     const getSqlValue = () => {
//         // validSql();
//         dtValidate();
//     };

//     return (
//         <>
//             <CodeMirror
//                 ref={editCodeMirrorRef}
//                 value={curValue}
//                 options={options}
//                 onInputRead={handleInputRead}
//                 onBeforeChange={handleEditorChange}
//             />
//             <button onClick={getSqlValue}>获取sql</button>
//         </>
//     );
// });

// export default SqlConsole;
