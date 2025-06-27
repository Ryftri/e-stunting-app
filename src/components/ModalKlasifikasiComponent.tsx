import { DataBalita } from "@/types/balita";
import { Button, List, ListItem, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";

export default function ModalKlasifikasiComponent (
    {
        openModal, 
        setOpenModal,
        runKlasifikasi,
        dataBalita
    } : {
        openModal: boolean,
        setOpenModal: Dispatch<SetStateAction<boolean>>,
        runKlasifikasi: () => Promise<void>,
        dataBalita: DataBalita
    }) {

    return (
        <>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Cek Kembali</ModalHeader>
                <ModalBody>
                    <List>
                        <ListItem>Nama Orang Tua   : {dataBalita.namaOrtu}</ListItem>
                        <ListItem>Nama Balita      : {dataBalita.namaBalita} cm</ListItem>
                        <ListItem>Tinggi Badan     : {dataBalita.tinggiBadan} cm</ListItem>
                        <ListItem>Jenis Kelamin    : {dataBalita.jenisKelamin}</ListItem>
                        <ListItem>Tanggal Lahir    : {dataBalita.tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}</ListItem>
                    </List>
                </ModalBody>
                <ModalFooter className="flex flex-col">
                    <div className="w-full">
                        <h1 className="mx-3 text-black dark:text-white text-start">Apakah Data Balita Tersebut Sudah Benar?</h1>
                    </div>
                    
                    <div className="flex flex-row justify-normal w-full space-x-4">
                        <Button color="success" onClick={async () => await runKlasifikasi()}>Benar</Button>
                        <Button color="failure" onClick={() => setOpenModal(false)}>
                            Kembali
                        </Button>
                    </div>
                </ModalFooter>
            </Modal>
        </>
    )
}