import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// ドラッグ&ドロップした要素を入れ替える
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// ドラッグ&ドロップの質問のスタイル
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  background: isDragging ? '#757ce8' : 'white',
  ...draggableStyle,
});
// ドラッグ&ドロップのリストのスタイル
const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? '#1769aa' : 'lightgrey',
  padding: '10px',
});

export default () => {
  const [questions, setQuestions] = useState<any[]>([
    { id: 1, title: 'question1' },
    { id: 2, title: 'question2' },
    { id: 3, title: 'question3' },
    { id: 4, title: 'question4' },
    { id: 5, title: 'question5' },
  ]);

  const onDragEnd = (result: any) => {
    // ドロップ先がない
    if (!result.destination) {
      return;
    }
    // 配列の順序を入れ替える
    let movedItems = reorder(
      questions, //　順序を入れ変えたい配列
      result.source.index, // 元の配列の位置
      result.destination.index // 移動先の配列の位置
    );
    setQuestions(movedItems);
  };

  return (
    // ドラッグアンドドロップの有効範囲
    <DragDropContext onDragEnd={onDragEnd}>
      {/* ドロップできる範囲 */}
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {/*　ドラッグできる要素　*/}
            {questions.map((question, index) => (
              <Draggable
                key={question.id}
                draggableId={'q-' + question.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {question.title}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
