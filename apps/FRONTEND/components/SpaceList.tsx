"use client"

import { BACKEND_URL } from "@/config"
import axios from "axios"
import { useEffect, useState } from "react"
import SpaceCard from "./SpaceCard";

type Space = {
  id: number;
  name: string;
  subject: string;
  isLive: boolean;
  createdAt: Date;
  adminId: string;
  admin: {
    id: string;
    name: string;
    email?: string;
  };
  participants:{
    id: string;
    name: string
  }[];
};

export default function SpaceList () {

    const [spaces , setSpaces] = useState<Space[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSpaces = async () => {
        try {
            const res = await axios.get(`${BACKEND_URL}/spaces`, {
                withCredentials: true,
            });
            const data = await res.data;
            setSpaces(data.spaces);
        } catch (error) {
            console.error('Error fetching spaces:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSpaces()
    }, [])

    return <div>
        {loading ? (
            <p className="text-center text-gray-500 mt-8">Loading spaces...</p>
        ) : spaces.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">No spaces currently</p>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {spaces.map((space) => (
                    <SpaceCard key={space.id} space={space} />
                ))}
            </div>
        )}
    </div>
}