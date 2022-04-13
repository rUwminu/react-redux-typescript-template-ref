import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../redux/reducers/index'

// Redux Action
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemInCart,
} from '../redux/actions-creators/storeActions'


const StoreCart: React.FC = () => {
  const dispatch = useDispatch()

  const storeInfo = useSelector((state: State) => state.storeInfo)
  const { cartList } = storeInfo

  const handleIncreaseItemQty = (itemId: number) => {
    dispatch(increaseItemQuantity(itemId))
  }

  const handleDecreaseItemQty = (itemId: number) => {
    dispatch(decreaseItemQuantity(itemId))
  }

  const handleRemoveItemQty = (itemId: number) => {
    dispatch(removeItemInCart(itemId))
  }

  return (
    <MainContainer>
      {cartList.length > 0 ? (
        cartList.map((x) => (
          <div className='item-card'>
            <div className='card-left'>
              <h2>{x.name}</h2>
              <div className='flex-grow flex items-center'>
                <div className='card-info'>
                  <span>RM {x.price}</span>
                  <div className='qty-control-box'>
                    <div
                      className='qty-btn'
                      onClick={() => handleIncreaseItemQty(x.id)}
                    >
                      +
                    </div>
                    <span>{x.quantity}</span>
                    <div
                      className='qty-btn'
                      onClick={() => handleDecreaseItemQty(x.id)}
                    >
                      -
                    </div>
                  </div>
                </div>
                <div
                  className='del-btn'
                  onClick={() => handleRemoveItemQty(x.id)}
                >
                  D
                </div>
              </div>
            </div>
            <div className='card-right'>
              RM {(x.price * x.quantity).toFixed(2)}
            </div>
          </div>
        ))
      ) : (
        <div className='list-empty'>Seem Empty Here</div>
      )}
    </MainContainer>
  )
}

const MainContainer = styled.div`
  ${tw`
    flex
    flex-col
    p-2
    ml-2
    h-full
    w-full
    max-w-xs
    ring-2
    ring-red-300
  `}

  .item-card {
    ${tw`
      flex
      items-center
      justify-between
      p-3
      font-semibold
      shadow-lg
      rounded-md
    `}

    .card-left {
      ${tw`
        flex-grow
        mr-3
      `}

      h2 {
        ${tw``}
      }

      .del-btn {
        ${tw`
          flex
          items-center
          justify-center
          ml-auto
          w-6
          h-6
          bg-red-400
          text-gray-50
          rounded-md
          cursor-pointer
        `}

        &:hover {
          ${tw`
            shadow-lg
          `}
        }
      }

      .card-info {
        ${tw`
          flex
          items-center
          justify-start
        `}

        span {
          ${tw`
            text-sm
            text-gray-600
          `}
        }

        .qty-control-box {
          ${tw`
            flex
            items-center
            justify-center
            ml-3
          `}

          .qty-btn {
            ${tw`
              flex
              items-center
              justify-center
              w-6
              h-6
              text-lg
              text-gray-50
              bg-yellow-300
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

          span {
            ${tw`
              flex
              items-center
              justify-center
              w-6
              h-6
            `}
          }
        }
      }
    }

    .card-right {
      ${tw`
        text-gray-900
      `}
    }
  }
`

export default StoreCart
