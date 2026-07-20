import {
  ArrowDownLeft,
  ArrowUpRight,
  Gift,
  History,
  Wallet,
} from "lucide-react";

import { AppBadge } from "@/components/common/AppBadge";
import { AppCard } from "@/components/common/AppCard";

import { PatientEmptyState } from "../../shared/components/PatientEmptyState";
import { PatientPageContainer } from "../../shared/components/PatientPageContainer";
import { PatientPageHeader } from "../../shared/components/PatientPageHeader";
import { PatientStatCard } from "../../shared/components/PatientStatCard";

import { useWalletStore } from "../store/useWalletStore";
import type { WalletTransaction } from "../types/wallet.types";

export const WalletPage = () => {
  const summary = useWalletStore((state) => state.summary);

  const transactions = useWalletStore(
    (state) => state.transactions
  );

  return (
    <PatientPageContainer>
      <PatientPageHeader
        badge="Billing & Money"
        title="Wallet & Credits"
        description="View your available credits, rewards and wallet transactions."
      />

      <AppCard className="overflow-hidden p-0 shadow-none">
        <div className="bg-primary p-6 text-white md:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Wallet size={28} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white/75">
                  Available Balance
                </p>

                <p className="mt-1 text-4xl font-black">
                  ₹{summary.balance}
                </p>
              </div>
            </div>

            <AppBadge className="w-fit bg-white/15 text-white">
              MedLab Credits
            </AppBadge>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80">
            Wallet credits can be used on eligible tests, health packages
            and future bookings.
          </p>
        </div>
      </AppCard>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PatientStatCard
          title="Available Balance"
          value={`₹${summary.balance}`}
        />

        <PatientStatCard
          title="Total Earned"
          value={`₹${summary.earned}`}
        />

        <PatientStatCard
          title="Total Used"
          value={`₹${summary.used}`}
        />
      </div>

      <AppCard className="p-5 shadow-none">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            <Gift size={22} />
          </div>

          <div>
            <h2 className="text-lg font-black text-foreground">
              How wallet credits work
            </h2>

            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>• Earn credits through referrals and eligible offers.</p>
              <p>• Apply available credits during checkout.</p>
              <p>• Credits cannot be withdrawn as cash.</p>
              <p>• Expiry rules may apply to promotional credits.</p>
            </div>
          </div>
        </div>
      </AppCard>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
            <History size={20} />
          </div>

          <div>
            <h2 className="text-xl font-black text-foreground">
              Wallet Transactions
            </h2>

            <p className="text-sm text-muted-foreground">
              Review your credit and debit activity.
            </p>
          </div>
        </div>

        {transactions.length === 0 ? (
          <PatientEmptyState
            icon={<Wallet size={36} />}
            title="No Wallet Transactions"
            description="Your earned and used wallet credits will appear here."
          />
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <WalletTransactionCard
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </div>
        )}
      </section>
    </PatientPageContainer>
  );
};

type WalletTransactionCardProps = {
  transaction: WalletTransaction;
};

const WalletTransactionCard = ({
  transaction,
}: WalletTransactionCardProps) => {
  const isCredit = transaction.type === "CREDIT";

  return (
    <AppCard className="p-5 shadow-none transition hover:border-primary/40">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            isCredit
              ? "bg-success/10 text-success"
              : "bg-danger/10 text-danger"
          }`}
        >
          {isCredit ? (
            <ArrowDownLeft size={22} />
          ) : (
            <ArrowUpRight size={22} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-black text-foreground">
                {transaction.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {transaction.date}
              </p>
            </div>

            <div className="sm:text-right">
              <p
                className={`text-xl font-black ${
                  isCredit ? "text-success" : "text-danger"
                }`}
              >
                {isCredit ? "+" : "-"}₹{transaction.amount}
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {transaction.type}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppCard>
  );
};