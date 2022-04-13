import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { State } from '../redux/reducers/index'
import { useSelector, useDispatch } from 'react-redux'

// Model
import { Product } from '../UtilsModels/Model'

// Redux Action
import { addItemToCart } from '../redux/actions-creators/storeActions'

const StoreProducts: React.FC = () => {
  const dispatch = useDispatch()

  const storeInfo = useSelector((state: State) => state.storeInfo)
  const { productList } = storeInfo

  const handleAddItemToCart = (item: Product) => {
    const newProduct = {
      ...item,
      quantity: 1,
    }

    dispatch(addItemToCart(newProduct))
  }

  return (
    <MainContainer>
      {productList &&
        productList.map((item) => (
          <div className='product-card' key={item.id}>
            <div className='product-img' />
            <div className='product-info-box'>
              <h2>{item.name}</h2>
              <span>RM {item.price}</span>
              <div
                className='add-btn'
                onClick={() => handleAddItemToCart(item)}
              >
                Add To Cart
              </div>
            </div>
          </div>
        ))}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex-grow
    gap-4
    grid
    grid-cols-4
    mr-2
  `}

  .product-card {
    ${tw`
        p-4
        max-h-[18rem]
        min-h-[18rem]
        rounded-md
        shadow-md
    `}

    .product-img {
      ${tw`
        w-full
        pt-[100%]
        min-h-[5rem]
        bg-yellow-300/75
      `}
    }

    .product-info-box {
      ${tw`
        flex
        flex-col
        font-semibold
      `}

      h2 {
        ${tw`
            text-lg
            text-gray-700
        `}
      }

      span {
        ${tw`
            text-xl
            text-blue-600
        `}
      }

      .add-btn {
        ${tw`
            mt-2
            py-1
            w-full
            text-center
            bg-yellow-500
            text-gray-50
            rounded-md
            cursor-pointer

            transition
            duration-200
            ease-in-out
        `}

        &:hover {
          ${tw`
            shadow-lg
          `}
        }
      }
    }
  }
`

export default StoreProducts
