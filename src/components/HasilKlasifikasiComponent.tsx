import { rekomendasiPerbaikanGizi } from "@/data/rekomendasiPerbaikanizi";
import { DataBalita } from "@/types/balita";
import checkRange from "@/utils/checkRange";
import { generatePDF } from "@/utils/generatePDF";
import { Card, Tabs, List, Table, Button, TabItem, ListItem, TableHead, TableHeadCell, TableBody, TableRow, TableCell } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function HasilKlasifikasiComponent ({
    dataBalita,
    setDataBalita,
} : {
    dataBalita: DataBalita
    setDataBalita: Dispatch<SetStateAction<DataBalita>>,
}) {

    return (
        <Card className="flex flex-col justify-center">
                            <h1 className="text-center">HASIL KLASIFIKASI DAN REKOMENDASI PERBAIKAN GIZI</h1>
                        
                            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                {dataBalita.hasilKlasifikasi}
                            </h5>
                            <Tabs>
                                <TabItem active title="Data Balita" icon={HiUserCircle}>
                                    <List>
                                        <ListItem>Nama Orang Tua : {dataBalita.namaOrtu}</ListItem>
                                        <ListItem>Nama Balita    : {dataBalita.namaBalita}</ListItem>
                                        <ListItem>Tinggi Badan   : {dataBalita.tinggiBadan} cm</ListItem>
                                        <ListItem>Jenis Kelamin  : {dataBalita.jenisKelamin}</ListItem>
                                        <ListItem>Umur (Bulan)   : {dataBalita.totalBulan} Bulan</ListItem>
                                        <ListItem>Tanggal Lahir  : {dataBalita.tanggalLahir.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })}</ListItem>
                                    </List>
                                </TabItem>
                                <TabItem title="Rekomendasi Pemberian Gizi" icon={MdDashboard}>
                                    <Table hoverable className="dark:text-white text-black">
                                        <TableHead className="dark:text-white text-black">
                                            <TableRow>
                                                <TableHeadCell>Nama Gizi</TableHeadCell>
                                                <TableHeadCell>Sumber</TableHeadCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody className="divide-y">
                                            {Object.entries(rekomendasiPerbaikanGizi[dataBalita.hasilKlasifikasi][checkRange(dataBalita.totalBulan)]).map(([gizi, sumber]) => (
                                                <TableRow className="divide-y" key={gizi}>
                                                    <TableCell>{gizi}</TableCell>
                                                    <TableCell>{sumber.map((item, index) => {
                                                        const lenght = sumber.length;

                                                        if(lenght > 1){
                                                            if(index === lenght - 1) return `dan ${item}.`

                                                            return `${item}, `
                                                        } else {
                                                            return `${item}.`
                                                        }
                                                    })}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TabItem>
                            </Tabs>
                            <Button onClick={() => {
                                setDataBalita(prevData => ({
                                    ...prevData,
                                    hasilKlasifikasi: ""
                                }))
                            }} className="py-2 px-4 mt-4 min-[954px]:mt-0">Klasifikasi Lagi</Button>
                            <Button onClick={() => generatePDF(dataBalita)} color="purple" className="py-2 px-4 mt-4 min-[954px]:mt-0">Unduh PDF</Button>
                        </Card>
    )
}