export function toggleDrawer () {
  return {
    type: 'TOGGLE_DRAWER',
  };
}

export const openDrawer = () => ({type: 'OPEN_DRAWER'})
export const closeDrawer = () => ({type: 'CLOSE_DRAWER'})