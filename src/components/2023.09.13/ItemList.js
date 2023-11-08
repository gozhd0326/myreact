import { useState } from "react";

export function ItemList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  //React onchange Event는 vanila(java)script에서의 keydown 이벤트처럼 입력할 때마다 발생함. (설계방식이 다름 - 마치 keydown Event처럼)
  function onChange(e) {
    setNewItem(e.target.value);
    console.log(e.target.value);
  }
  function addItem() {
    const temp = [...items, newItem]; //새로운 어레이 새로운 객체를 만들어서 넣어야 됨. addItem이 실행될 때 생성되었다가 다시 사라짐.
    setItems(temp);
    // console.log(temp);
    setNewItem(""); //input 입력창을 clear 시킴
    console.log("addItems 함수 안", items);
  }

  return (
    <>
      <input
        placeholder="물품이름을 입력하세요."
        onChange={onChange} //입력을 하고 엔터를 치면 바뀜
        value={newItem} //onchange로 바뀐 값 = input에 입력한 값
      />
      <button onClick={addItem}>물품추가</button>
      <h3>물품목록</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
