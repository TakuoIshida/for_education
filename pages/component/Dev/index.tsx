import Link from 'next/link'
import React, { FC, useState, useReducer } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'
import Table from '../common/Table'
import Card from '../common/Card'
import Alert from '../common/Alert'
import Checkbox from '../common/Checkbox'
import ClickEvent from '../common/ClickEvent'


// 1機能＝1ディレクトリの考え方：re-ducksのファイル構成を採用した。
// メリット
// ・reducer、actionTypeが肥大化しない。
// ・ディレクトリごとなので、大規模になってもディレクトリの責任が明確・記述された場所が把握しやすい
// ・TSのTypeを各Type.jsの作成も、同じディレクトリ内にすることで、型定義の管理もしやすい

// デメリット
// ・初期段階で作成が大変
// ・ducksの構成（operater, selector, typeがなく簡単。
//  modules, containerのみ。※modulesにstore周りを全ていれる）が普及している感はあるため、
//  最初とっつきにくい
// ・管理するファイルは増える

// re-ducks構成
// https://tech.playground.style/javascript/re-ducks/
// dev
// ├ actions.js
// ├ index.js
// ├ operations.js
// ├ reducers.js
// ├ selectors.js
// └ types.js

// typeScriptのducks構成
// https://qiita.com/ragnar1904/items/72631e4476f94057c630
// ↑この二つを混ぜる。

// ducks構成
// actions
// ├ devAction.js
//
// reducers
// ├ devReducers.js

// modules
// ├ dev.js

// TODO: scssを後で入れる
// 再読み込みでCSSが崩れる
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    container: {
      textAlign: 'center',
    },
    link: {
      textDecoration: 'none',
      hover: 0.8,
    },
    devider: {
      margin: 30,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

// 通常のアクセスの場合、getInitialPropsがサーバー側で実行されます。
// 一方、next/linkを使用してクライアントサイドルーティングした場合にはクライアント側で実行されます。
// そのためisomorphic-unfetchといったクライアント側でもサーバー側でも動作するfetchライブラリが推奨されます。
// getInitialPropsではなく、getStaticPropsを使おう
// https://qiita.com/matamatanot/items/1735984f40540b8bdf91

// fetch
// contributerの数、コミット数、スターの数が圧倒的に少ない、
// 保守性に不安がある。。
// https://gist.github.com/jsjoeio/0fd8563bc23ef852bc921836512992d9

import axios from 'axios'
import fetch from 'isomorphic-unfetch'

export async function getStaticProps() {
  // gitHubからnext.jsの情報を取得するAPI
  const url = 'https://api.github.com/repos/zeit/next.js';
  const res = await fetch(url)
  const json = await res.json()
  const stars: number = json.stargazers_count
  const response = await axios.get(url)
  const { archived = true, description = "description"}: { archived: boolean, description: string} = response.data

  // propsで値が返される→props.starsで取得できる
  return {
    props: {
      stars: stars,
      archived: archived,
      description: description,
      dev: {
        checkbox: false,
        textbox: 'propsの値',
      }
   }
  }
}


const initialState = {
  BadDispatchCount: 0
}

// キーは文字列、そのほかは入った型を定義する → types.tsxへ定義
type initialState<T> = {
  [key: string]: T
}

const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'increment':
      return {BadDispatchCount: state.BadDispatchCount + 1};
    case 'decrement':
      return {BadDispatchCount: state.BadDispatchCount - 1};
    default:
      throw new Error();
  }
}

const BadDispatchCounter = () =>  {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increseNumber = () => {
    dispatch({type: 'increment'})
  }

  const decreaseNumber = () => {
    dispatch({type: 'decrement'})
  }
  return (
    <>
      DispatchCount: {state.BadDispatchCount}
      <button onClick={() => increseNumber()}>+</button>
      <button onClick={() => decreaseNumber()}>-</button>
    </>
  );
}

// 単一のコンポネント（共通コンポネントには最適）
const HooksCounter = () => {
  const [count, setCount] = useState(0)
  // const [state, setCount] = useState(intialState)
  const countUp = () => setCount(count + 1)
  const countDown = () => setCount(count - 1)

  return (
    <>
    HooksCount: {count}
    <button onClick={() => countUp()}>countUp </button>
    <button onClick={() => countDown()}>countDown </button>
    </>
  )
}

type devProps = {
  stars: number,
  archived: boolean,
  description: string,
  dev: {
    checkbox: boolean;
    // ?は存在すれば受け取る。
    // textbox?: string;
    textbox: string;
  };

  // 使うかわからないけど
  // CSSプロパティ
  style?: React.CSSProperties;
};

import { useDispatch, useSelector } from 'react-redux'
// const dev = ({ dev, ...other }: devProps) => {
// ↑これでも書ける
const Dev: FC<devProps> = ({ dev, stars, archived, description}) => {
  const classes = useStyles();
  return (
    <>
      <div className="grid">
        <Link href="/">
          <a className={classes.link}>Back to Top</a>
        </Link>
      </div>
      <Link href="//material-ui.com/components/box/">
        <a>Go to Material-UI</a>
      </Link>

      <div className={classes.container}>
        <div>
          Propsで受け取った初期値：{dev.textbox}
        </div>
        <div>
        fetchAPIで取得したnext.jsの星の数：{stars}
        </div>
        <div>
        axiosAPIで取得したarchived：{`${archived}`}
        </div>
        <div>
        axiosAPIで取得したdescription：{description}
        </div>
        <div>
        <BadDispatchCounter />
        </div>
        <div>
        <HooksCounter />
        </div>
      </div>


      <Divider className={classes.devider} />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
          </Typography>
            <Button color="inherit">ボタン</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
      </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload
      </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          className={classes.button}
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
      </Button>
      </div>
      <Divider className={classes.devider} />
      <Table />
      <Divider className={classes.devider} />
      <Card />
      <Divider className={classes.devider} />
      <Alert />
      <Divider className={classes.devider} />
      <ClickEvent />
      <Divider className={classes.devider} />
      <Checkbox />
    </>
  );
}

export default Dev
