import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setImageUrl } from "../../../slices/uploadImageSlice";
import axios from "axios";
import { uploadAttachment } from "../../../services/uploadFile.service";



export const AddImageModal = ({ isShow, closeModal, toastCallBack }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const dispatch = useDispatch();
  const [banner, setBanner] = useState({
    isUploading: false,
    isUploaded: false,
    progress: 0,
    url: "",
  });

  const onSubmit = async () => {
    if (banner) {
      toastCallBack(image)
      closeModal()
    }
  };


  const getAttachment = (e) => {
    if (e) {
      const file = e.target.files[0];
      if (file) {
        const fileSizeInBytes = file.size;
        const fileSizeInKB = fileSizeInBytes / 1024;
        setImageName(e.target.files[0]?.name)
        dispatch(setImageUrl({ url: URL.createObjectURL(file) }))
        setImage(URL.createObjectURL(file));
        setImageSize(fileSizeInKB);


        setBanner({
          isUploading: true,
          isUploaded: false,
          progress: 100,
          url: '',
        });
        // const fileData = new FormData();
        // fileData.append("attachment", e.target.files[0]);
      }
    }

  };

  useEffect(() => {
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: "",
    });
  }, [isShow]);

  const removeImage = () => {
    document.getElementById('file').value = ""
    setImage(null);
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: "",
    });
    setImageName("")
    setImageSize("");
  };

  return (
    <div
      className={`overflow-auto modal fade ${isShow && "show"}`}
      id="add"
      role="dialog"
      aria-modal="true"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <span className="modal-title h4 text-p-dark-blue line-height-10">
              Upload Photos
            </span>
            <button onClick={() => closeModal(false)} type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center d-flex flex-column gap-3 align-items-center p-5">
            <div className="upload-img">
              <a href="#"><img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/49b7/dbb8/7f5a4cd1450e24b66b2565b5d150de06?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLSDOdsjXYeFwoNiLNdAbtY1b6e7XuNTn8YoMrS~UfFchmcZxqo7METqu709QOBT~96GPkjOp6ptLzhYdctdPCmCd4K00~Xw7sjh9f1beHieTMBvUoSMCOji6K~gakDl3cw-rpUY2d5-ubfsXOEjLWZIav7HFowpH6CA3nR1nsZExPFwO7grWhiFc61yR4s1nXxZAx2bzcmgO1caf76sWZMTAozp~bCLYLUJ48Fj6CI0e7b6fR1LClhFd1p7kiP6N8HH1j18W12csqYwpBrqkdcS~ZtC1wBRvYnOYOQn9iefEFcUncOo72R7b8gG0NrsCxCZlJrguVkgq~cdltCN0A__" alt="" /></a>
            </div>


            <span>
              Drag & Drop Your Files Here, or{' '}
              <label htmlFor="file" className="browse cursor-pointer-file">
                browse
              </label>{' '}
              <input id="file" type="file" onChange={getAttachment} style={{ display: 'none' }} />
            </span>
            <p>JPG/TIF, min 700 * 700 px, max 50,000 px or 1,000 MP, max 2GB. We Save uploaded photos in your customer account for 90 days</p>

            <p className="upload-btn rounded-3 p-3 text-uppercase">upload photos</p>

          </div>

          {imageName && (
            <div className="uploaded-content mt-4 d-flex justify-content-between align-content-center">
              <div>
                <a href="#"><img className="img-fluid" src={image} alt="" /></a>
              </div>
              <div className=" d-flex flex-column gap-2 align-items-start me-auto ms-3 justify-content-center">
                <a href="#" className="content-title">{imageName}</a>
                <span>{imageSize} KB</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${banner.progress}%` }} aria-valuenow={banner.progress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="d-flex gap-3">
                <span onClick={removeImage} className="bg-icons cursor-pointer-file">
                  <svg fill="#EF4343" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </span>

                <span className="bg-icons"> <svg fill="#16A249" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span>
              </div>
            </div>
          )}


          <div className="modal-footer p-2 border-0">
            <button
              type="button"
              className="cancle-btn rounded-3"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={image ? false : true}
              className="done-btn rounded-3 border-0 text-white"
              onClick={onSubmit}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};








export const AddImageModalCopy = ({ isShow, closeModal, toastCallBack }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const dispatch = useDispatch();
  const [banner, setBanner] = useState({
    isUploading: false,
    isUploaded: false,
    progress: 0,
    url: "",
  });

  const onSubmit = async () => {
    if (banner) {
      toastCallBack(image)
      closeModal()
    }
  };


  const getAttachement = async (e) => {
    const fileExt = e.target.files[0].name.split(".")[1].toLowerCase() || "txt";
    if (e.target.files[0].size > 5000000) {
      return alert("You cannot upload more than 5mb attachment.");
    }
    // if (fileExt !== "jpg" && fileExt !== "jpeg" && fileExt !== "png") {
    //   return alert("Only jpg, jpeg and png files are supported.");
    // }
    const fileIndex = e.target.files.length - 1;
    const file = e.target.files[0];
    setImage(file)
    setImageName(file.name);
    file.isUploading = true;
    file.cancelToken = axios.CancelToken.source();
    const path = (window.URL || window.webkitURL).createObjectURL(
      e.target.files[0]
    );
    file.path = path;
    setBanner({
      isUploading: true,
      isUploaded: false,
      progress: 0,
      url: path,
    });

    const formData = new FormData();
    formData.append('image', file);

    const response = await uploadAttachment(
      formData,
      setBanner,
      file.cancelToken
    );
    if (response) {
      if (response.data.url) {
        setBanner((prevState) => ({
          isUploading: false,
          isUploaded: true,
          progress: 0,
          url: response.data.url,
        }));
      }
    }
  };

  useEffect(() => {
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: "",
    });
  }, [isShow]);

  const removeImage = () => {
    document.getElementById('file').value = ""
    setImage(null);
    setBanner({
      isUploading: false,
      isUploaded: false,
      progress: 0,
      url: "",
    });
    setImageName("")
    setImageSize("");
  };

  return (
    <div
      className={`overflow-auto modal fade ${isShow && "show"}`}
      id="add"
      role="dialog"
      aria-modal="true"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content p-4">
          <div className="modal-header border-0">
            <span className="modal-title h4 text-p-dark-blue line-height-10">
              Upload Photos
            </span>
            <button onClick={() => closeModal(false)} type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center d-flex flex-column gap-3 align-items-center p-5">
            <div className="upload-img">
              <a href="#"><img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/49b7/dbb8/7f5a4cd1450e24b66b2565b5d150de06?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLSDOdsjXYeFwoNiLNdAbtY1b6e7XuNTn8YoMrS~UfFchmcZxqo7METqu709QOBT~96GPkjOp6ptLzhYdctdPCmCd4K00~Xw7sjh9f1beHieTMBvUoSMCOji6K~gakDl3cw-rpUY2d5-ubfsXOEjLWZIav7HFowpH6CA3nR1nsZExPFwO7grWhiFc61yR4s1nXxZAx2bzcmgO1caf76sWZMTAozp~bCLYLUJ48Fj6CI0e7b6fR1LClhFd1p7kiP6N8HH1j18W12csqYwpBrqkdcS~ZtC1wBRvYnOYOQn9iefEFcUncOo72R7b8gG0NrsCxCZlJrguVkgq~cdltCN0A__" alt="" /></a>
            </div>
            <span>
              Drag & Drop Your Files Here, or{' '}
              <label htmlFor="file" className="browse cursor-pointer-file">
                browse
              </label>{' '}
              <input id="file" type="file" onChange={(e) => getAttachement(e)} style={{ display: 'none' }} />
            </span>
            <p>JPG/TIF, min 700 * 700 px, max 50,000 px or 1,000 MP, max 2GB. We Save uploaded photos in your customer account for 90 days</p>

            <p className="upload-btn rounded-3 p-3 text-uppercase">upload photos</p>

          </div>
          
          {imageName && (
            <div className="uploaded-content mt-4 d-flex justify-content-between align-content-center">
              <div>
                <a href="#"><img className="img-fluid" src={banner.url} alt="" /></a>
              </div>
              <div className=" d-flex flex-column gap-2 align-items-start me-auto ms-3 justify-content-center">
                <a href="#" className="content-title">{imageName}</a>
                <span>{imageSize} KB</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${banner.progress}%` }} aria-valuenow={banner.progress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="d-flex gap-3">
                <span onClick={removeImage} className="bg-icons cursor-pointer-file">
                  <svg fill="#EF4343" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </span>

                <span className="bg-icons"> <svg fill="#16A249" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></span>
              </div>
            </div>
          )}


          <div className="modal-footer p-2 border-0">
            <button
              type="button"
              className="cancle-btn rounded-3"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={image ? false : true}
              className="done-btn rounded-3 border-0 text-white"
              onClick={onSubmit}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}