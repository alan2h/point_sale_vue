import { generateClasses } from '@formkit/themes'
const config = {
  config: {
    classes: generateClasses({
      global: {
        label: 'block mb-1 font-bold text-lg',
        message: 'text-red-500 mb-5',
        wrapper: 'space-y-4 mb-5',
      },
      text:{
      },
      number:{
      },
      file: {
      },
      select: {
      },
    })
  }
}
export default config
