import { Button, Modal } from "reactstrap";

function ModalComponent({modalDefaultOpen,setModalDefaultOpen}) {

  return (
    <>
      <Modal
        isOpen={modalDefaultOpen.flag}
        toggle={() => setModalDefaultOpen({flag:false,data:null})}
        centered
        size="lg"
      >
        <div className="modal-header">
          <h6 className="modal-title" id="modal-title-default">
            <p>{modalDefaultOpen.data!=null?modalDefaultOpen.data.name:null}</p>
          </h6>
        </div>

        {modalDefaultOpen.data!=null?
        <div>
            <ul>
                <li>【リモートワーク】: {modalDefaultOpen.data.remote}</li>
                <li>【タイプ】: {modalDefaultOpen.data.type}</li>
                <li>【職種】: {modalDefaultOpen.data.workstyle}</li>
                <li>【面接回数】: {modalDefaultOpen.data.interview}</li>
                <li>【研修の有無】: {modalDefaultOpen.data.training}</li>
                <li>【会社HP】: URLここにはる※採用ページに飛ばしたほうが良いのでは?</li>
            </ul>
            <p> {modalDefaultOpen.data.info}</p>
        </div>
        :null}

        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="link"
            onClick={() => setModalDefaultOpen({flag:false,data:null})}
            type="button"
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
export default ModalComponent;
