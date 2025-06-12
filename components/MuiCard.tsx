"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CircleDollarSign, FileText } from "lucide-react";
import Link from "next/link";
import LongMenu from "./Popover";

export default function ImgMediaCard({ id, price, number }) {
  // la date d'activation formatee
  const date = new Date();
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/produits/${id}`}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h3"
              className="text-blue-400 font-bold"
            >
              Product {number + 1}
            </Typography>

            {/* Aligning dollar sign and price */}
            <div className="flex items-center space-x-2">
              <CircleDollarSign size={20} color="#e2db00" />
              <Typography gutterBottom variant="h6" component="h3">
                Price: {price}$
              </Typography>
            </div>

            {/* Aligning file icon and description */}
            <div className="flex items-center space-x-2">
              <FileText size={20} color="#e1e122" />
              <Typography variant="body2" color="textSecondary" component="p">
                Description of Product {number + 1}...
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <div>
          <p className="text-green-400 font-bold ml-5">
            Activation: {formattedDate}
          </p>
        </div>
      </Link>

      <LongMenu />
    </Card>
  );
}
