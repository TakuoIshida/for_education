// 立ち位置：stateの加工を行い、viewのindexに表示するものに絞る
// 使い方：stateの配列、辞書の加工を行い、useSelectで返す
import { RootState } from '../../store/store'
import { createSelector } from "reselect";

// useSelector Hook: storeの中から必要なstateだけを抽出する
const currentCountSelector = (state: RootState) => state.reducksCount;


// const getReducksCounter = createSelector(
//     [currentCountSelector],
//     state => state.reducksCount
// );
// export default getReducksCounter

// import { useSelector } from 'react-redux';

// export const ReducksCounter: React.FC = () => {
//   // storeからstateを取得する
//   // rootReducer.counterにcountReducerを指定したので、以下のようにする。
//   // currentCountはCount型のオブジェクト
//   const currentCount = useSelector((state: RootState) => state.reducksCount);
//   return <>{currentCount}</>
// };
