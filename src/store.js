import { init } from '@rematch/core'
import models from './models'

console.log('models---||', models)

const store = init({ models })

export default store
