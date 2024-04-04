"use client";
import Image from "next/image";
import { useState } from "react";
import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { encryptAndUploadFile } from "../../utils/lit";

export default function Home() {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;
		setSelectedFile(file);
	};

	const handleUpload = async () => {
		if (selectedFile) {
			await encryptAndUploadFile(selectedFile);
			setSelectedFile(null);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
			Testing Lit
			<div className="p-4 max-w-sm mx-auto">
				<input
					type="file"
					onChange={handleFileChange}
					className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				/>
				{selectedFile && (
					<div className="mt-2 flex justify-between items-center">
						<span className="text-sm">{selectedFile.name}</span>
						<button
							onClick={handleUpload}
							className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
						>
							Upload
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
