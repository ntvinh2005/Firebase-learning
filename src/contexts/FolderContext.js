import React from "react";
import { useReducer, useEffect } from "react";
import { database } from "../firebase";
import { useAuth } from "./AuthContext";
import FolderReducer from "../reducers/FolderReducer";

export const ROOT_FOLDER = { name: "Root", id: null, path: [] };

export function useFolder(folderId = null, folder = null) {
  const { user } = useAuth();

  const [FolderState, dispatch] = useReducer(FolderReducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
  });

  useEffect(() => {
    dispatch({ type: "SELECT_FOLDER", payload: { folderId, folder } });
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: "UPDATE_FOLDER",
        payload: { folder: ROOT_FOLDER },
      });
    }

    database.folders
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          type: "UPDATE_FOLDER",
          payload: { folder: database.formatDoc(doc) },
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: "UPDATE_FOLDER",
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  useEffect(() => {
    return database.folders
      .where("parentId", "==", folderId)
      .where("userId", "==", user.uid)
      .orderBy("createAt")
      .onSnapshot((snapshot) => {
        dispatch({
          type: "SET_CHILD_FOLDERS",
          payload: { childFolders: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [folderId, user]);

  useEffect(() => {
    return (
      database.files
        .where("folderId", "==", folderId)
        .where("userId", "==", user.uid)
        //.orderBy("createdAt")
        .onSnapshot(snapshot => {
          dispatch({
            type: 'SET_CHILD_FILES',
            payload: { childFiles: snapshot.docs.map(database.formatDoc) },
          })
        })
    )
  }, [folderId, user])

  return FolderState;
}
