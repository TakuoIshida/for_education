
// actionsファイルには、純粋にRedux Actionのみを記述します。
// 例）
// // export const FETCH_USERS = "FETCH_USERS";
// export const fetchUsersListAction = (usersList) => {
//     return {
//         type: "FETCH_USERS",
//         payload: usersList
//     }
// };


export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";
export const reducksCountUp = (reducksCount: number) => {
    return {
        type: COUNT_UP,
        payload: reducksCount
    }
};
export const reducksCountDwon = (reducksCount: number) => {
    return {
        type: COUNT_DOWN,
        payload: reducksCount
    }
};

// TODO：ActionTypeは、enumで管理、もしくは定数マスタのように管理する？