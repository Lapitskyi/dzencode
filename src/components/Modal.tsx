import React, {type ReactNode, useEffect} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
    footer?: ReactNode;
    classFooter?: string;
    size?: "sm" | "lg" | "xl";
    centered?: boolean;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         title,
                                         children,
                                         footer,
                                         classFooter,
                                         size,
                                         centered = true,
                                     }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="modal d-block"
            tabIndex={-1}
            style={{zIndex: 1000}}
        >
            <div
                className={`modal-dialog  ${size ? `modal-${size}` : ""} ${
                    centered ? "modal-dialog-centered" : ""
                }`}
            >
                <div className="modal-content position-relative"
                     style={{maxHeight: "80vh", zIndex: 1000}}>
                    <button
                        type="button"
                        className="btn-close shadow-sm bg-white position-absolute rounded-4 start-100 top-0 translate-middle p-1"
                        onClick={onClose}
                    />
                    {title && (
                        <div className="modal-header position-relative">
                            <h5 className="modal-title">{title}</h5>

                        </div>
                    )}
                    <div className="modal-body">{children}</div>
                    {footer && <div className={`modal-footer ${classFooter}`}>{footer}</div>}
                </div>
            </div>
            <div
                className="modal-backdrop fade show"
                onClick={onClose}
                style={{cursor: "pointer", zIndex: 40}}
            />

        </div>
    );
};

export default Modal;
