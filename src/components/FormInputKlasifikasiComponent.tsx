import { DataBalita } from "@/types/balita";
import { Card, Label, Datepicker, Select, TextInput, Button } from "flowbite-react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function FormInputKlasifikasiComponent ({
    dataBalita,
    handleChange,
    setOpenModal
} : {
    dataBalita: DataBalita,
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}) {
    const today = new Date()
    const fiveYearsAgo = new Date(new Date().setFullYear(today.getFullYear() - 5))
    return (
        <Card className="w-full max-w-[calc(100%-5px)] mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Klasifikasi Status Gizi</h1>
                <form className="flex flex-col min-[954px]:flex-row min-[954px]:gap-4">
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="nama-ortu" >
                                Nama Orang Tua
                            </Label>
                        </div>
                        <TextInput
                            onChange={handleChange}
                            id="nama-ortu"
                            type="string"
                            name="namaOrtu"
                            value={dataBalita.namaOrtu}
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                            />
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="nama-balita">
                                Nama Balita
                            </Label>
                        </div>
                        <TextInput
                            onChange={handleChange}
                            id="nama-balita"
                            type="string"
                            name="namaBalita"
                            value={dataBalita.namaBalita}
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                            />
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="tanggal-lahir" >
                                Pilih Tanggal Lahir
                            </Label>
                        </div>
                        <Datepicker
                            value={dataBalita.tanggalLahir}
                            onChange={date => {
                                const mockEvent = {
                                    target: {
                                        name: 'tanggalLahir',
                                        value: date,
                                    } as unknown as HTMLInputElement,
                                  } as ChangeEvent<HTMLInputElement>;
                                  handleChange(mockEvent);
                            }}
                            minDate={fiveYearsAgo}
                            maxDate={today}
                            language="id"
                            name="tanggalLahir"
                            title="Tanggal Lahir Balita"
                            labelTodayButton='Pilih'
                            labelClearButton="Tutup"
                            className="w-full"
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                        />
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="jenis-kelamin">
                                Pilih Jenis Kelamin
                            </Label>
                        </div>
                        <Select
                            id="jenis-kelamin"
                            value={dataBalita.jenisKelamin}
                            onChange={handleChange}
                            name="jenisKelamin"
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                            >
                            <option value="laki-laki">Laki-laki</option>
                            <option value="perempuan">Perempuan</option>
                        </Select>
                    </div>
                    <div className="w-full min-[954px]:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="tinggi-badan" >
                                {"Tinggi Badan Balita (cm)"}
                            </Label>
                        </div>
                        <TextInput
                            onChange={handleChange}
                            id="tinggi-badan"
                            type="number"
                            name="tinggiBadan"
                            value={dataBalita.tinggiBadan}
                            required
                            disabled={!(!dataBalita.hasilKlasifikasi)}
                            />
                    </div>
                    <Button
                        onClick={() => setOpenModal(true)}
                        className="py-2 px-4 mt-4 min-[954px]:mt-0"
                        disabled={!(!dataBalita.hasilKlasifikasi)}
                        >
                            Cek Klasifikasi
                    </Button>
                </form>
            </Card>
    )
}