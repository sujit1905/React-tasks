import { createContext } from "react"





export const themedatecontext=createContext();

const Themecontext = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Themecontext
