const FolderReducer = (state, action) => {
    const {type, payload} = action
    console.log(payload)
    switch (type){
        case 'SELECT_FOLDER':
            return { 
                folderId: payload.folderId,
                folder: payload.folder,
                childFiles: [],
                childFolders: [],
            }
        case 'UPDATE_FOLDER':
            return { 
                ...state,
                folder: payload.folder
            }
        case 'SET_CHILD_FOLDERS':
            return {
                ...state,
                childFolders: payload.childFolders,
            }
        case 'SET_CHILD_FILES':
            return {
                ...state,
                childFiles: payload.childFiles, 
            }
        default: return state
    }
}
export default FolderReducer