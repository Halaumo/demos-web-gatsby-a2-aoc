import React from 'react'
import BrandsRow from '../../hocs/brandsRow'
import BrandsItem from '../../hocs/brandsItem'
import BrandBig from './components/brandBig'
import BrandSmall from './components/brandSmall'

import bigImg01    from '@/images/brands/big/01.jpg'
import bigImg02    from '@/images/brands/big/02.jpg'
import logoImg01   from '@/images/brands/logos/01.png'
import logoImg02   from '@/images/brands/logos/02.png'
import logoImg03   from '@/images/brands/logos/03.png'
import mediumImg01 from '@/images/brands/medium/01.jpg'
import mediumImg02 from '@/images/brands/medium/02.jpg'
import smallImg01  from '@/images/brands/small/01-bg.jpg'
import smallImg02  from '@/images/brands/small/02-bg.jpg'
import smallImg03  from '@/images/brands/small/03-bg.jpg'
import smallIcon01 from '@/images/brands/icons/01-icon.png'
import smallIcon02 from '@/images/brands/icons/02-icon.png'
import smallIcon03 from '@/images/brands/icons/03-icon.png'

const Template = () => {

  return (
    <BrandsRow>
      <BrandsItem baseSize={8} lgSize={12}>
        <BrandBig image={bigImg01} hoverImage={logoImg01} />
      </BrandsItem>

      <BrandsItem baseSize={4} lgSize={12}>
        <BrandSmall
          icon={smallIcon01}
          image={smallImg01}
          title='vintage Oliva'
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.`}
        />
      </BrandsItem>

      <BrandsItem baseSize={4} lgSize={12}>
        <BrandSmall
          icon={smallIcon02}
          image={smallImg02}
          title='La boriosa'
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.`}
        />
      </BrandsItem>

      <BrandsItem baseSize={8} lgSize={12}>
        <BrandBig image={bigImg02} hoverImage={logoImg02} />
      </BrandsItem>

      <BrandsItem baseSize={4} lgSize={12}>
        <BrandBig image={mediumImg01} hoverImage={logoImg03} />
      </BrandsItem>

      <BrandsItem baseSize={4} lgSize={12}>
        <BrandSmall
          icon={smallIcon03}
          image={smallImg03}
          title='RETRÒ BIKE - M. HULOT'
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.`}
        />
      </BrandsItem>

      <BrandsItem baseSize={4} lgSize={12}>
        <BrandBig image={mediumImg02} hoverImage={logoImg03} />
      </BrandsItem>
    </BrandsRow>
  )
}

export default Template
