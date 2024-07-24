console.log('helloworld');
// 코드러너 단축기 : ctrl + alt + n
// ctrl + / : 한 줄 주석
// alt + shft + a : 여러 줄 주석

// ctrl + shft + p : 커멘드 파레트(명령어들의 총집합)
// ctrl + shft + e : 파일 목록 탭
// ctrl + b : 탭 닫기

console.log('안녕하세요');

// 코드 스니펫 설정
// 커맨드 파레트 -> snippets -> javascript
/* 
    "Print to console": {
        "prefix": "cl",
        "body": [
            "console.log($1);",
            "$2"
        ],
        "description": "Log output to console"
    }
*/

// 파일 생성 및 폴더 생성 단축키 설정
// 커맨드 파레트 -> preferences:open keyboard shortcut (json)

/* 
[
  { "key": "ctrl+n",
    "command": "explorer.newFile",
    "when": "!editorFocus" },


  { "key": "ctrl+shift+n",
    "command": "explorer.newFolder",
    "when": "!editorFocus" }
]
*/

