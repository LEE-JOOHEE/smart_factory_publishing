# Getting Started with Smart Factory

## 1. nodejs 설지 (LTS 버전으로 설치)

- node-v16.17.0-x64.msi

## 2. Get Repository

- 회원 가입필요(이메일)

```
http://gitlab.euso.kr
```

- 레파지토리관리자에게 가입 이메일 또는 전화로 전달(강민현)

```bash
mhkang@euclidsoft.co.kr, kangminhyeon@gmail.com
```

- 레파지토리 다운로드

```bash
cd C://project/workspace

git clone http://gitlab.euso.kr/Min/smart_factory.git
```

- VSCode 확장 프로그램 설치

```
  * ESLint
  * Power Mode
  * Prettier - Code formatter
```

- VSCode 환경설정

```json
settings.json
{
  "prettier.singleQuote": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "workbench.tree.indent": 16,
  "editor.formatOnSave": true,
  "powermode.enabled": true,
  "powermode.combo.counterSize": 0,
  "powermode.shake.enabled": false,
  "powermode.presets": "flames",
  "workbench.startupEditor": "none",
  "editor.minimap.enabled": false,
  "window.zoomLevel": -1,
  "javascript.preferences.importModuleSpecifier": "non-relative",
}
```

## 3. package.json에 명시되어있는 라이브러리 설치

```bash
npm install
```

## 4. 개발 환경 실행

```bash
npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
```

## 5. 코드 컨벤션

- CSS 규칙(사용자-CommonUsr.css, 관리자/시스템관리-Common.css)

  1. 관리자, 시스템 관리자

  - Common.css import
  - 클래스명(className) : 'eu-'로 시작

  2. 사용자

  - CommonUsr.css import
  - 클래스명(className) : 'eu-usr-'로 시작

- 컴포넌트

```
  * 명칭: 페이지명01, 페이지명02 …
  * 연속된 컴포넌트 선언 시, 최상위 컴포넌트를 제외한 컴포넌트 Row className 뒤에 'margin-top' 추가
```

- Page 레이아웃

```javascript
const SptEvlPlanPage = () => {
  return (
    <BaseLayout>
      <TitlePage>현장평가계획수립</TitlePage>
      <SptEvlPlanContainer />
    </BaseLayout>
  );
};
```

- Container 레이아웃

```javascript
<>
  <Row className="eu-row-page-comp-layout">
    <Col span={24}>
      <SptEvlPlan01 ojtGroupCodes={ojtGroupCodes} searchClick={searchClick} />
    </Col>
  </Row>
  <Row className="eu-row-page-comp-layout">
    <Col span={24}>
      <SptEvlPlan02 arrEvlPlan={arrEvlPlan} />
    </Col>
  </Row>
</>
```

- Component 레이아웃

```html
<Row className="eu-row-comp-title"> /*  margin-top */
  <Col span={12}>
    <TitleComp>미 배정 과제</TitleComp>
  </Col>
  <Col span={12} style={{ textAlign: 'right' }}>
    <Button
      size="small"
      className="eu-btn-crud-fine"
      onClick={altmntAsmtClick}
    >
      배정
    </Button>
  </Col>
</Row>
<Row className="eu-row-comp-cont">
  <Col span={24}>
    <Table
      key={'arrUnAltmntAsmt'}
      rowSelection={{ type: 'checkbox', ...rowSelection }}
      columns={arrUnAltmntAsmtColumns}
      dataSource={arrUnAltmntAsmt}
      size="small"
      bordered
      pagination={{ showSizeChanger: false, pageSize: 4 }}
    />
  </Col>
</Row>
```

- 변수

```
  * Object Type JSON 변수의 접두어 ojt*
    ex) ojtEvlPlan
  * ArrayList Type JSON 변수의 가장 앞에 arr*
    ex) arrEvlPlan
  * 모든 데이터는 String으로 처리 Integer -> String 사용
    ex) { year : '2022' }
```

- 테이블

```
* Arr 컬럼 헤더는 컴포넌트 안에, 데이터는 페이지에
* 사이즈 default small
```

- 트리

```
* Default로 트리 다 펼치기
* 한번에 다 펼치거나 닫는 옵션 추가
```

- 함수

```text
  * 버튼클릭 이벤트 : "버튼이름" + Click
    ex) addYearClick()
  * 데이터 변경 이벤트 : "폼객체이름" + Change
    ex) yearChange()
  * 데이터 처리 함수 : insert*, update*, delete*, ...등
    ex) insertEvlPlan, updateEvlPlan, deleteEvlPlan
```

- 팝업(모달)

```text
  * 모달 스크롤 구현시 해당 props 추가
```

```javascript
      <Modal
        title="모달 타이틀 입력"
        style={{ height: 'calc(100vh - 200px)' }}
        bodyStyle={{ overflowY: 'scroll' }}
```

```text
  * 한 페이지에 팝업 여러 개일 시, open 변수명 = 컴포넌트명Open
  * Width만 사이즈 지정
  * 팝업 내부에 테이블, 트리 등으로 height가 많이 늘어나지 않게 설정
```

- Select

```
  * Object일 때, value props에 값 binding
  * Array일 때, DefaultValue props에 값 binding
```

- 공통 메소드

```javascript
// Object Change
const ojt명칭Change = (value, column) => {
  setOjt명칭((prev) => ({ ...prev, [column]: value }));
};

// Array Change
const arr명칭Change = (value, column, index) => {
  setArr명칭((prev) => {
    prev[index][column] = value;
    return [...prev];
  });
};
```

- Table Row에 Form 객체 렌더링 시 DefaultValue 로 값 지정
  - render시 value로 지정하면 Radio, Select, checkbox등의 폼을 클릭해도 값이 바뀌지 않아요.
  - table render는 한번 그려지면 변경 안됨.
- Descriptions Form 객체 렌더링 시 value 로 값 지정
  - defaultValue로 기본값을 셋팅하면 value에 넣은것이 아니기때문에 빈값으로 저장되요. 한번 클릭해서 change해줘야 값 지정됨

```javascript
// Table Form 객체 렌더링 시 DefaultValue 로 값 지정
title: '항목',
dataIndex: 'column',
render: (_, record, index) => {
          return (
            <Radio.Group
              onChange={(evt) => {
                arrEvlPvltrtMttrChange(evt.target.value, 'd', index);
              }}
              defaultValue={record?.d}
            >
              <Radio value={'해당'}>해당</Radio>
              <Radio value={'해당없음'}>해당없음</Radio>
            </Radio.Group>
          );

// Descriptions Form 객체 렌더링 시 value 로 값 지정
title: '항목',
dataIndex: 'column',
render: (_, record, index) => {
          return (
            <Radio.Group
              onChange={(evt) => {
                arrEvlPvltrtMttrChange(evt.target.value, 'd', index);
              }}
              defaultValue={record?.d}
            >
              <Radio value={'해당'}>해당</Radio>
              <Radio value={'해당없음'}>해당없음</Radio>
            </Radio.Group>
          );
```

- 표형태 Table

```html
  * 기본은 Antd에서 제공하는 Descriptions 사용
  * 셀병합이 있는 경우 Descriptions으로 구현이 어려움(추가로 만든 Custom table 사용)
<table
  key={'eu-custom-description-table'} // 각 테이블마다 고유 키 입력
  className="eu-custom-description-table" // 고정
  summary="테이블요약입력"
>
  <colgroup>
    <col width={'10%'} />
  </colgroup>
  <tbody>
    <tr>
      <td rowSpan={2} className="header">
        {/* 상위 header 지정 시, rowSpan 입력 필요 */}
        상위 header
      </td>
    </tr>
    <tr>
      <td className="header">header</td>{' '}
        {/*header 지정 시, header class 필요 */}
      <td>value</td>
    </tr>
  </tbody>
</table>
```

- 행 선택 이벤트와 행의 컬럼 선택 이벤트 분기처리

```javascript
// 1/3 테이블 행의 버튼 클릭 시 행 선택 이벤트 중지
// event.stopPropagation();
const arrEvlPlanColumns = [
  {
    title: '계획명',
    dataIndex: 'e',
    width: 250,
    render: (_, record) => {
      return (
        <>
          <Button
            type="default"
            size="small"
            icon={<SearchOutlined />}
            onClick={(event) => {
              alert('Not RowClick & Popup');
              console.log('buttonClick : ', record);
              event.stopPropagation();
            }}
          >
            {record?.e}
          </Button>
        </>
      );
    },
  },
];

// 2/3 테이블에서 선택된 키 값 관리 추가
const [selKey, setSelKey] = useState('');

// 테이블에 데이터가 있는경우 첫행을 자동으로 출력하는 경우 강제 하이라이팅
useEffect(() => {
  if (arrObjcAply && arrObjcAply.length > 0 && selKey === '') setSelKey(0);
}, [arrObjcAply]);

return (
  <>
    <Row className="eu-row-comp-title">
      <Col span={3}>
        <TitleComp>평가계획</TitleComp>
      </Col>
      <Col span={9}>총 {arrEvlPlan ? arrEvlPlan.length : 0}건</Col>
      <Col span={12} style={{ textAlign: 'right' }}></Col>
    </Row>
    <Row className="eu-row-comp-cont">
      <Col span={24}>
        <Table
          columns={arrEvlPlanColumns}
          dataSource={arrEvlPlan}
          onRow={(record, index) => ({
            onClick: () => {
              //프로세스 처리를 위한 클릭 이벤트 호출
              evalPlanRowClick(record);
              // 3/3 행 선택 시 색상 변경을 위한 키값 저장
              setSelKey(index);
            },
          })}
          //키 값에 따른 색상 변경
          rowClassName={(_, idx) =>
            idx === selKey ? 'eu-table-select-row' : 'eu-table-un-select-row'
          }
          pagination={false}
          scroll={{ y: 700 }}
        />
      </Col>
    </Row>
  </>
);
```

- 테이블 셀 세로 합치기

```javascript

  let arrRowKey = [];
  let arrGroupKey = [];
  const sharedOnCell = (record, index) => {
    if (arrRowKey.includes(record.key)) {
      //Merge row key 가 같으면 무조건 rowspan 지정
      return {
        rowSpan: record.g,
      };
    } else {
      if (record.g > 0) {
        if (arrGroupKey.includes(record.a2)) {
          //Merge row key가 다르고 그룹키가 같으면 rowspan = 0
          return {
            rowSpan: 0,
          };
        } else {
          //그룹키가 없으면 신규 merge row
          arrRowKey.push(record.key);
          arrGroupKey.push(record.a2);
          return {
            rowSpan: record.g,
          };
        }
      }
      return {};
    }
  };

  // 성과지표 테이블 헤더
  const rsltIdxColums = [
    {
      title: '순번',
      dataIndex: 'a1',
    },
    {
      title: '구분',
      dataIndex: 'a2',
      onCell: sharedOnCell,
    },
    ...
  ]
```

- View와 Edit를 동시에 사용하는 조건부 렌더링

```
  * 해당 컴포넌트를 사용하는 페이지에 editable 변수 선언 및 전달
  * View와 Edit를 구분하는 컴포넌트에 Editable props 선언
```

- 기타

```
  * 용어편집에 없는 단어 행정표준단어(참고)에서 참고해서 공통표준단어에 추가 후 용어편집에서 재검색
  * 테이블, 트리 등 데이터 많을 시 가정해 구조 확인
  * 페이징 없는 곳 height 고정 후 스크롤 추가
  * 첨부파일은 공통
```

- 알림/경고 창

```js
// 가능한 title만 사용합니다.(bold 텍스트)

// info : 사전 안내 메세지 등
Modal.info({
  title: 'This is a notification message',
  content: (
    <div>
      <p>some messages...some messages...</p>
      <p>some messages...some messages...</p>
    </div>
  ),
  onOk() {},
});

// 처리 완료, 성공 등
Modal.success({
  title: '저장 했습니다.',
  //content: 'some messages...some messages...',
});

// 에러 발생
Modal.error({
  title: '데이터 처리 오류 발생',
  content: (
    <div>
      <p>시스템 관리자에게 문의해 주세요.</p>
      <p>중소기업통합콜센터 : 1357</p>
    </div>
  ),
});

//폼 유효성확인, 경고창 등
Modal.warning({
  title: 'This is a warning message',
  // content: 'some messages...some messages...',
});
```

- Description 등 헤더에서 입력 항목 필수 표시(\*)

```html
  <Descriptions.Item
    label={<DescriptionRequired>사업기간</DescriptionRequired>}
  >
  </<Descriptions.Item>
```

- Button

```js
/*  ClassName으로 구분
  * 메인 페이지에 제시된 버튼 사용
  * 프로세스 버튼 위치: 화면 최하단 우측
  * CRUD 버튼 위치: 각 Title comp 우측
  * 버튼 순서 : Fine > Warning > Error
  * 버튼 Size
      - 페이지 하단의 Large
      - 팝업 하단의 Middle
      - 컴퍼넌트 중간, 표상단 등 small
      - 그리드 목록의 버튼 small
*/

// Page Process Buttons, 페이지 하단
  <Button type="primary" size="large" className="eu-btn-process-default"> 기본 </Button>
  <Button size="large" className="eu-btn-process-fine"> 접수 </Button>
  <Button size="large" className="eu-btn-process-warning"> 제출 </Button>
  <Button size="large" className="eu-btn-process-error"> 반려 </Button>

// Popup Process Buttons, 팝업 하단
  <Button type="primary" size="middle" className="eu-btn-popup-process-default"> 기본 </Button>
  <Button size="middle" className="eu-btn-popup-process-fine"> 접수 </Button>
  <Button size="middle" className="eu-btn-popup-process-warning"> 제출 </Button>
  <Button size="middle" className="eu-btn-popup-process-error"> 반려 </Button>

// Component CRUD Buttons, 컴포넌트 중간, 그리드 목록
  <Button size="small" className="eu-btn-crud-default"> 기본 </Button>
  <Button size="small" className="eu-btn-crud-fine"> 조회 </Button>
  <Button size="small" className="eu-btn-crud-warning"> 임시저장 </Button>
  <Button size="small" className="eu-btn-crud-error"> 삭제 </Button>
  <Button size="small" className="eu-btn-row-insert" icon={<PlusSquareFilled />}> 행추가 </Button>
  <Button size="small" className="eu-btn-row-delete" icon={<MinusSquareFilled />}> 행삭제 </Button>
  <Button size="small" className="eu-btn-excel-download" icon={<DownloadOutlined />}> 엑셀다운로드 </Button>

// Table 목록에 들어가는 버튼
  <Button size="small" className="eu-btn-table-default"> 기본 </Button>
  <Button size="small" className="eu-btn-table-fine"> 조회 </Button>
  <Button size="small" className="eu-btn-table-warning"> 임시저장 </Button>
  <Button size="small" className="eu-btn-table-error"> 삭제 </Button>

```
#   s m a r t _ f a c t o r y _ p u b l i s h i n g  
 