import { CheckCircle2, XCircle } from "lucide-react";
import certificates from "@/data/certificates.json"
type Certificate = {
  name: string;
  course: string;
  dateIssued: string;
  type: string;
};

const allCertificates = certificates as Record<string, Certificate>;

export default function VerifyPage({ params }: { params: { certId: string } }) {
  const certId = params.certId.toUpperCase();
  const cert = allCertificates[certId];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 p-8 text-center">
        {cert ? (
          <>
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-1">Certificate Verified</h1>
            <p className="text-gray-400 text-sm mb-6">Issued by LetsCode Ltd</p>

            <div className="text-left space-y-3 bg-white/5 rounded-xl p-5">
              <Row label="Certificate ID" value={certId} />
              <Row label="Name" value={cert.name} />
              <Row label="Course" value={cert.course} />
              <Row label="Type" value={cert.type} />
              <Row label="Date Issued" value={cert.dateIssued} />
            </div>
          </>
        ) : (
          <>
            <XCircle className="w-14 h-14 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-1">Certificate Not Found</h1>
            <p className="text-gray-400 text-sm">
              No certificate matches ID <span className="text-white">{certId}</span>. If you
              believe this is an error, contact LetsCode Ltd.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}