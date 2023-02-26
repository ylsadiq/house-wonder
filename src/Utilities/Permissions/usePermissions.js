import { useSelector } from "react-redux"
import { checkPermission } from "./PermissionFunctions"

// const contentManager = checkPermission(employee, 'Content Manager')
// const attendanceExecutive = checkPermission(employee, 'Attendance Executive')

function usePermissions() {
    const {employee} = useSelector(state => state.auth)

    const levels = {
        contentManager: checkPermission(employee, 'Content Manager'),
        attendanceExecutive: checkPermission(employee, 'Attendance Executive'),
    }

    return levels
}

export default usePermissions