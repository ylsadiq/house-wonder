import { useSelector } from "react-redux"
import { checkLevel } from "./PermissionFunctions"

// export const admin = checkLevel(employee, 'admin')
// export const superAdmin = checkLevel(employee, 'superAdmin')
// export const member = checkLevel(employee, 'employee')

function useLevels() {
    const {employee} = useSelector(state => state.auth)

    const levels = {
        admin: checkLevel(employee, 'admin'),
        superAdmin: checkLevel(employee, 'superAdmin'),
        member: checkLevel(employee, 'member')
    }

    return levels
}

export default useLevels