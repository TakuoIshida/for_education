import Link from 'next/link'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import AbstCarousel from '../re-ducks/carousel/components/Carousel'
import Devider from '../re-ducks/commons/components/Devider'
import CategoryCardGroup from '../re-ducks/categoryCards/components/CategoryCardGroup'

const TopPage: NextPage = () => {

  return (

    // TODO: 有料会員登録前の処理
    // サービスページで、有料会員を選択した際に、Loginへ飛ばす
    
    <div id="index">
      <Button variant="contained">
          <Link href="/dev">
            Dev
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/dev/next_api">
            Next.js API res test
          </Link>
      </Button>

      <Button variant="contained">
          <Link href="/ssg">
          SSG test
          </Link>
      </Button>
      <AbstCarousel />
      <Devider />
      <CategoryCardGroup />
      <Devider />
    </div>
  )
}

export default TopPage
