const NewFileOnBlur = () => {
    setAddNewFile(false)
    const newFileName = FileInput.current.value
    if (newFileName === "" || newFileName.lentgh == 0) {
      setAddNewFile(false)
    }
    return
  }
export default NewFileOnBlur
